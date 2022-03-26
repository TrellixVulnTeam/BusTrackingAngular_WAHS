import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student:any=[];

  status: any = [];
  fullName: any = [];
  busnumber: any = [];

  constructor(private http:HttpClient ) {  }
  getAll(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44346/api/student/getall').subscribe((res)=>{
      this.student=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }

  getGetRoundStatus(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44346/api/student/GetRoundStatus').subscribe((res)=>{
      this.status=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }
  GetBusNum(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44346/api/student/GetBusNum').subscribe((res)=>{
      this.busnumber=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }
  GetParentName(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44346/api/student/getparentname').subscribe((res)=>{
      this.fullName=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }

  create(student:any){
  //  this.spinner.show();
   // body.imagename=this.display_Image;
    this.http.post('https://localhost:44346/api/student/create/',student).subscribe((res)=>{
      debugger;
    //  this.spinner.hide();
     // this.toastr.success('saved Successfully :)');
    },error=>{
     // this.spinner.hide();
     // this.toastr.error(error.status,error.message);
    })
  }
  update(student:any){
    //  body.imagename=this.display_Image;
   
      this.http.put('https://localhost:44346/api/student/update',student).subscribe((res)=>{
      //  this.toastr.success('updated Successfully :)');
  
      },err=>{
      //  this.toastr.error(err.status,err.message);
      })
  
    } 
    delete(id:number){
      this.http.delete('https://localhost:44346/api/student/delete/'+id).subscribe((res)=>{
       // this.toastr.success('Deleted Successfully :)');
      },err=>{
      //  this.toastr.error(err.status,err.message);
      })
    }
  }
