import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  today = Date.now();
  name = 'Organization';
  featured: Object[] = [];
  projects: Object[] = [];
  members: Object[] = [];

  ngOnInit(): void {
    this.featured = [
      {
        icon: 'colorize',
        name: 'Research & Development',
        description: 'long description here',
        color: 'teal-A700',
        link: '/',
      },
      {
        icon: 'phone_in_talk',
        name: 'Communication',
        description: 'long description here',
        color: 'orange-A700',
        link: '/',
      },
      {
        icon: 'straighten',
        name: 'Technology Architecture',
        description: 'long description here',
        color: 'light-blue-A700',
        link: '/',
      },
      {
        icon: 'exposure',
        name: 'Data Science',
        description: 'long description here',
        color: 'amber-A700',
        link: '/',
      },
      {
        icon: 'lock',
        name: 'Security',
        description: 'long description here',
        color: 'deep-orange-A700',
        link: '/',
      },
    ];
    this.projects = [
      {
        icon: 'colorize',
        name: 'Research & Development',
        description: 'long description here',
        color: 'teal-A700',
        link: '/',
      },
      {
        icon: 'phone_in_talk',
        name: 'Communication',
        description: 'long description here',
        color: 'orange-A700',
        link: '/',
      },
      {
        icon: 'straighten',
        name: 'Technology Architecture',
        description: 'long description here',
        color: 'light-blue-A700',
        link: '/',
      },
      {
        icon: 'exposure',
        name: 'Data Science',
        description: 'long description here',
        color: 'amber-A700',
        link: '/',
      },
      {
        icon: 'lock',
        name: 'Security',
        description: 'long description here',
        color: 'deep-orange-A700',
        link: '/',
      },
    ];
    this.members = [
      {
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/069/06b/2a8cd67.jpg',
        name: 'Richard Hendricks',
        role: 'CEO',
        email: 'richard@piedpiper.com',
      },
      {
        avatar: 'https://media-exp1.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAh-AAAAJDA3NTM0ODEyLTlhODQtNDZlNi1hMjE5LTRlMWIyNDFiZDY0Zg.jpg',
        name: 'Erlich Bachman',
        role: 'Majority Investory',
        email: 'bachman@piedpiper.com',
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/603119304817713152/gDb-TckW.jpg',
        name: 'Betram Gilfoyle',
        role: 'Senior Systems Architect',
        email: 'gilfoyle@piedpiper.com',
      },
      {
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA3mAAAAJGZjZjY1MWYwLTIwYTktNDc0MS1hZmQ4LTRhNjFiNDUxNzBjMw.jpg',
        name: 'Dinesh Chugtai',
        role: 'Senior Programmer',
        email: 'dinesh@piedpiper.com',
      },
      {
        avatar: 'https://www.magicalquote.com/wp-content/uploads/2015/07/Donald-Jared-Dunn.jpg',
        name: 'Jared (Donald) Dunn',
        role: 'Head of Business Development',
        email: 'jared@piedpiper.com',
      },
      {
        avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzE2MTYwNV5BMl5BanBnXkFtZTgwNzk2NTk2ODE@._V1_UY317_CR131,0,214,317_AL_.jpg',
        name: 'Nelson Big Head Bighetti',
        role: 'Majority Investor',
        email: 'bighead@piedpiper.com',
      },
    ];
  }

  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
                
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
              this._domSanitizer.bypassSecurityTrustResourceUrl
          ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata.svg'));

              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl
          ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }
}
