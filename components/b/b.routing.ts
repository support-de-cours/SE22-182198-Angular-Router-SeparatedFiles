import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

    // Page B - localhost/page-b
    {
        path: 'page-b',
        component: MainComponent,

        children: [
            // Page B, Child A - localhost/page-b/child-a
            {
                path: 'child-a',
                component: ChildAComponent
            },

            // Page B, Child B - localhost/page-b/child-b
            {
                path: 'child-b',
                component: ChildBComponent
            },

            // Default child - This is an Error
            {
                path: '',
                redirectTo: 'child-a',
                pathMatch: 'full'
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class B_RoutingModule { }