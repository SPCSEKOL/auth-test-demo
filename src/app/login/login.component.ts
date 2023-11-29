import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {AsyncSubject, BehaviorSubject, forkJoin, map, Observable, of, ReplaySubject, timer, zip} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup
  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      id: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login() {
    if (this.loginForm.valid) {
      localStorage.setItem('token', Math.random().toString())
      this.router.navigate(['dashboard'])
    }
  }

  signup(): void {
    /*const data = forkJoin({
      foo: of(1,2,3,5),
      bar: Promise.resolve(8),
      baz: timer(4000)
    })
    data.subscribe({
      next: (value: any) => console.log(value),
      complete: () => console.log('the end')
    })

    const ages = of(25,27,29)
    const names = of('AP','DP','SP')
    const isExists = of(true,false,true)
    zip(ages,names,isExists).pipe(
        map(([age,name,isExist]) => ({ age, name, isExist }))
    ).subscribe((value: any) => console.log(value))*/
    const subject = new BehaviorSubject(123)
    //subject.next(123)
    subject.subscribe(x => {
      console.log("First call to BehaviorSubject", x)
    })
    subject.subscribe(y => {
      console.log("Second call to BehaviorSubject", y)
    })

    subject.next(456)
    subject.subscribe(z => {
      console.log("First call to updated BehaviorSubject", z)
    })

    subject.subscribe(this.exampleObserver)

    subject.next(789)
    subject.unsubscribe()
  }

  exampleObserver = {
    next: (x: number) => console.log("Stylish observable", x),
    error: (error: any) => console.log(error),
    complete: () => console.log("Completed successfully")
  }
}
