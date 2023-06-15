import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'structuraldirectives';
  users: any[] = []
  usersBox=false;
  adminBox=false;
  admins: any[] = []
  usercount:number=0
  admincount:number=0
  getUsersData(event: any) {
      this.users.push(event)
      this.usersBox=true
      this.usercount = this.usercount + 1
  }
  getAdminsData(event: any) {
    // this.adminsBox=true
    this.admins.push(event)
    this.adminBox=true
    this.admincount = this.admincount + 1
  }
  onRemoveUsers(item: any) {
    this.users.splice(item, 1)
    if(this.users.length==0){
      this.usersBox=false;
  
    }
    this.usercount = this.usercount - 1
    }
  onRemoveAdmins(item: any) {
    this.admins.splice(item, 1)
    if(this.admins.length==0){
      this.adminBox=false;
     
    }
    this.admincount = this.admincount - 1
  }
  data: TreeNode[] = [
    {
        label: 'Angular Project With PrimeNg',
        expanded: true,
        children: [
            {
                label: 'NgFor',
            },
            {
                label: 'NgIf',   
            },
            {
                label: 'Input',
            },
            {
              label: 'Primnng',
              expanded:true,
              children:[
                {
                   label: 'P-Card', 
                },
                {
                   label: 'P-input-Text', 
                },
                {
                   label: 'P-button', 
                },
                {
                   label: 'OrganizationChart', 
                },
                {
                   label: 'P-BadgeM', 
                },
                {
                   label: 'Slice', 
                }
              ]
          },
            {
                label: 'Output',   
            },
            {
              label: 'Push',
          },
          {
              label: 'Slice',   
          }
        ]
    }
];
}
