import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-render',
  templateUrl: './popup-render.component.html',
  styleUrls: ['./popup-render.component.css']
})
export class PopupRenderComponent {

  @Input() data: any = []
  @Output() formEmit = new EventEmitter<any>();
  @Output() cancelEmit = new EventEmitter<any>();
  form!: FormGroup;
  @Input() typeOfEdit: boolean = false

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    if (this.typeOfEdit) this.bindData()
  }

  createForm() {
    this.form = this.fb.group({});
    this.data.forEach((item: any) => {
      if (item.type === 'input') {
        this.form.addControl(item.key, this.fb.control('', [Validators.required]));
      } else if (item.type === 'select') {
        this.form.addControl(item.key, this.fb.control('', [Validators.required]));
      }
    });
  }

  emitFormDtls() {
    this.formEmit.emit(this.form.value)
  }

  cancel(type: boolean) {
    if (type) this.cancelEmit.emit(this.form.value)
  }

  bindData() {
    console.log('calling bind function');

    this.data?.forEach((item: any) => {
      console.log(item?.key, item?.keyValue, item);
      this.form?.get(item?.key)?.setValue(item?.keyValue)
    })
  }

}
