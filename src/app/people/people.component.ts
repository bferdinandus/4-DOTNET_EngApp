import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../entities";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styles: [],
})
export class PeopleComponent implements OnInit {
  public people$: Observable<Person[]>;

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.people$ = this.client.get<Person[]>("https://localhost:5001/person");
  }
}
