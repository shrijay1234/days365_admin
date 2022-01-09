import { Component, OnInit, ViewChild, OnDestroy, HostListener, Input, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from "../services/category.service";
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { JsonObject } from '@angular-devkit/core';





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  categoryForm!: FormGroup;
  file: any = null;
  sizeExceed = '';
  spinner = false;

  categories: Array<any> = [];
  cachedCategory: string = '';
  isActive: JsonObject = {
    i: -1,
    j: -1
  };

  selectedParent: any = {};

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private local: LocalStorageService,
    private categoryService: CategoryService,
  ) {
    let accessToken = this.local.retrieve('accessToken');
    let type = this.local.retrieve('type');
    if (!accessToken || type !== 'admin') {
      this.router.navigateByUrl('/');
    }
    this.getCategories();
  }

  ngOnInit(): void {
  }


  createForm() {
    this.categoryForm = new FormGroup({
      'categoryName': new FormControl('', [Validators.required]),
      'isLeaf': new FormControl(false, [Validators.required]),
      'isRestricted': new FormControl(false, [Validators.required]),
      'myFile': new FormControl('',[Validators.required])
    });
  }



  getCategories(parentId = '') {
    let params: JsonObject = { id: parentId };
    this.categoryService.getCategories(params)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        if (!response.error) {
          this.categories.push(response.data);
        }
        else {
          this.toastr.error(response.message);
        }
        this.cachedCategory = '';
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
        this.cachedCategory = '';
      });
  }


  selectCategory(index: number, j: number, category: { _id: string, is_leaf: boolean }) {
    if (this.cachedCategory !== '' || category.is_leaf) {
      return;
    }
    this.isActive.i = index;
    this.isActive.j = j;
    this.cachedCategory = category._id;
    this.categories.splice(index + 1);
    this.getCategories(category._id);
  }


  addNewCategory(item: { parent: JsonObject }) {
    if (this.spinner) {
      return;
    }
    this.selectedParent.id = item.parent.id;
    this.selectedParent.name = item.parent.name;
    this.file = null;
    this.createForm();
  }


  addCategory() {
    if (this.categoryForm.invalid) {
      this.toastr.error("invalid");
      return;
    }
    this.spinner = true;
    this.sizeExceed = '';
    const formData: FormData = new FormData();
    let catform = this.categoryForm.getRawValue();
    formData.append('categoryName', catform.categoryName);
    formData.append('isLeaf', catform.isLeaf);
    formData.append('isRestricted', catform.isRestricted);
    formData.append('parentId', this.selectedParent.id);
    if (this.file) {
      formData.append('categoryImage', this.file);
    }
    this.categoryService.addCategory(formData)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((payload) => {
        var response = JSON.parse(JSON.stringify(payload));
        this.spinner = false;
        if (!response.error) {
          this.toastr.success(response.message);
        }
        else {
          this.toastr.error(response.message);
        }
        this.selectedParent.id = '';
        this.selectedParent.name = '';
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/category']);
        });
      }, (error) => {
        this.toastr.error(error.status + " : " + error.statusText);
        this.spinner = false;
      });
  }


  hasError(control: string, errorName: string) {
    return this.categoryForm.controls[control].hasError(errorName);
  }



  /**
   *  Detect filechange event for signature upload
   */

  fileChange(event: any) {
    this.file = null;
    this.sizeExceed = '';
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let type = fileList[0].type;
      let size = Math.round((fileList[0].size) / 1024);
      if (type != "image/jpeg" && type != "image/png") {
        this.sizeExceed = 'Image should be in .jpeg or .png format.';
      }
      else {
        if (size > 500) {
          this.sizeExceed = 'File too Big, please select a file less than 500KB.';
        }
        else {
          this.file = fileList[0];
        }
      }
    }
  }


  @HostListener('window:beforeunload')

  async ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
