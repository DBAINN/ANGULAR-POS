import { Component,NgModule, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatSelectModule,MatFormFieldModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router){}
ngOnInit(): void {
  this.signupForm = this.formBuilder.group({
    Nome :[''],
    Cognome :[''],
    Email :[''],
    Password :[''],
    Ruolo:[''] 
})
}
signup(){
  this.http.post<any>("http://localhost:3000/users",this.signupForm.value)
   .subscribe((res)=>{alert("Registrazione avvenuta con successo");
   this.signupForm.reset();
   this.router.navigate(['users-admin']);},err=>{ alert("Errore nella registrazione")
})
}
}
