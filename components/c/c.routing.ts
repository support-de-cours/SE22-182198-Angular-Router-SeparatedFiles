import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

    // Page C - localhost/page-c
    {
        path: 'page-c',
        component: MainComponent,

        children: [
            // Page C, Child A - localhost/page-c/child-a
            {
                path: 'child-a',
                component: ChildAComponent
            },

            // Page C, Child B - localhost/page-c/child-b
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
export class C_RoutingModule { }