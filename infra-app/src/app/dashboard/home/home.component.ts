import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  enablePopup: boolean = false
  formData: any = []
  employeeDtls: any = {}
  typeOfEdit: boolean = false  //to check new or edit
  viewId: any

  addEmployee() {
    this.typeOfEdit = false
    const data = [
      {
        key: 'name',
        type: 'input',
        label: 'Name'
      },
      {
        key: 'companyName',
        type: 'input',
        label: 'Company Name'
      },
      {
        key: 'emailId',
        type: 'input',
        label: 'Email'
      },
      {
        key: 'contactNo',
        type: 'input',
        label: 'Contact Number'
      },
      {
        key: 'designation',
        type: 'input',
        label: 'Designation'
      }
    ]

    this.formData = data
    this.enablePopup = !this.enablePopup
  }

  cancel() {
    this.enablePopup = !this.enablePopup
  }

  formDtls(event: any) {
    if (!this.typeOfEdit) {
      let duplicateCheck: boolean = false
      Object?.keys(this.employeeDtls)?.forEach((key: any) => {
        const emailValues = this.employeeDtls[key]?.find((item: any) => item?.key == 'emailId')?.keyValue
        if (emailValues == event?.emailId) duplicateCheck = true;
        return
      })
      if (duplicateCheck) {
        alert('Email id Is duplicate')
      } else {
        const employeeData = this.formData?.map((item: any) => {
          return {
            keyValue: event[item?.key],
            ...item
          }
        })
        const id = new Date().getTime();
        this.employeeDtls[id] = employeeData
        this.enablePopup = !this.enablePopup
        alert('Employee Details Created')
      }
    } else {
      this.employeeDtls[this.viewId]?.forEach((item: any) => {
        item['keyValue'] = event[item?.key]
      })
      alert('Employee Details Updated')
      this.enablePopup = !this.enablePopup
    }
  }


  getEmpolyee(item: any) {
    return Object.keys(item)
  }

  deleteEmployee(keyValueToRemove: any) {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      delete this.employeeDtls[keyValueToRemove];
    }
  }

  viewEmployee(item: any) {
    this.formData = this.employeeDtls[item]
    this.viewId = item
    console.log(item, 'edit Values');
    this.typeOfEdit = true
    this.enablePopup = !this.enablePopup
  }

}
