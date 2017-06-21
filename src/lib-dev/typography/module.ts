import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '../helpers';


@Component({
    selector: 'app',
    template: `
        <div class="demo-typography">
            <span class="mc-display-4">Display 4</span>
            <span class="mc-display-3">Display 3</span>
            <span class="mc-display-2">Display 2</span>
            <span class="mc-display-1">Display 1</span>

            <span class="mc-headline">Headline</span>
            <span class="mc-title">Title</span>
            <span class="mc-subheading">Subheading</span>

            <span class="mc-body-2">Body 2</span>
            <span class="mc-body-1">Body 1</span>
        </div>`,
    styleUrls: ['./main.scss'],
})
export class DemoComponent {}


/* tslint:disable:max-classes-per-file */
@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        DemoComponent
    ]
})
export class DemoModule {}

function main() {
    return platformBrowserDynamic()
        .bootstrapModule(DemoModule)
        /* tslint:disable:no-console */
        .catch((error) => console.error(error));
}

bootloader(main);

