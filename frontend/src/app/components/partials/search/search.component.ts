import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'] // Use styleUrls instead of styleUrl
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  toyTerm = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      } else if (params.toyTerm) {
        this.toyTerm = params.toyTerm;
      }
    })
  }

  ngOnInit(): void { }

  handleSearch(s: string, isToySearch: boolean): void {
    if (isToySearch) {
      this.toyTerm = s;
      this.search(s, true);
    } else {
      this.search(s, false);
    }
  }

  search(term: string, isToySearch: boolean): void {
    if (isToySearch) {
      this.router.navigateByUrl('/searchToy/' + term.toLowerCase());
    } else {
      this.router.navigateByUrl('/search/' + term);
    }
  }
}