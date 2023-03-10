import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    firstName: string = '';
    lastName: string = '';
    arrayList: any = [];
    editIndex: number = -1;
    deleteIndex: number;
    toastMessage: string = '';

    constructor(private _commonService: CommonService) { }

    ngOnInit() {
    }

    validateFields(): boolean {
        return this.firstName !== '' && this.lastName !== '';
    }

    saveItem(): void {
        if (this.validateFields()) {
            this.editIndex > -1 ? this.updateItem() : this.addPersonDetail();
            this.resetValues();
        } else {
            alert('Please add all the values')
        }
    }

    prepareObjects(): any {
        return { 'firstName': this.firstName, 'lastName': this.lastName };
    }

    addPersonDetail(): void {
        this._commonService.addPersonDetail(this.prepareObjects()).subscribe((result: any) => {
            this.triggerToaster(result);
        });
    }

    getPersonDetail(): void {
        this._commonService.getPersonDetail().subscribe((res: any) => {
            this.arrayList.push(res.data)
        });
    }

    triggerToaster(message: string): void {
        this.toastMessage = message;
        $('#toaster').toast('show');
    }

    updateItem(): void {
        this.arrayList[this.editIndex].firstName = this.firstName;
        this.arrayList[this.editIndex].lastName = this.lastName;
        this.editIndex = -1;
    }

    deleteItem(index: number): void {
        this.arrayList.splice(index, 1);
    }

    resetValues(): void {
        this.firstName = '';
        this.lastName = '';
    }

    editItem(data: any, index: number): void {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.editIndex = index;
    }

    getData(): void {
        this._commonService.getData().subscribe((data: any) => {
        })
    }

    getProducts(): void {
        this._commonService.getProducts().subscribe((data: any) => {
        })
    }

}
