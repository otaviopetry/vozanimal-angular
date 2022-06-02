import { HttpClient } from '@angular/common/http';
import { waitForAsync } from '@angular/core/testing';
import { of, Subscription } from 'rxjs';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { LoadPageService } from './load-page.service';

describe('[Unit] - LoadPageService', () => {
    let service: LoadPageService;

    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    const subscription: Subscription = new Subscription();

    beforeEach((): void => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new LoadPageService(httpClientSpy);
    });

    afterEach((): void => {
        subscription.unsubscribe();
    });

    describe('loadPageBySlug', (): void => {
        it('should call the api passing the page slug', (): void => {
            const mockedSlug: string = 'randomSlug';

            service.loadPageBySlug(mockedSlug);

            expect(httpClientSpy.get).toHaveBeenCalledWith(
                jasmine.stringContaining(`slug=${mockedSlug}`)
            );
        });
    });

    describe('loadPagesByParentSlug', (): void => {
        it('should call the service method loadPageBySlug with the slug', (): void => {
            const mockedSlug: string = 'randomSlug';

            spyOn(service, 'loadPageBySlug').and.returnValue(of());

            service.loadPagesByParentSlug(mockedSlug);

            expect(service.loadPageBySlug).toHaveBeenCalledWith(mockedSlug);
        });

        it('should call the http client using the loaded page id as parent', waitForAsync((): void => {
            const mockedId: number = 55;
            const mockedPageRequestResponse: IPageData[] = [
                {
                    id: mockedId,
                } as IPageData,
            ];

            spyOn(service, 'loadPageBySlug').and.returnValue(
                of(mockedPageRequestResponse)
            );
            httpClientSpy.get.and.returnValue(of());

            subscription.add(
                service
                    .loadPagesByParentSlug('anySlug')
                    .subscribe((): void => {})
            );

            expect(httpClientSpy.get).toHaveBeenCalledWith(
                jasmine.stringContaining(mockedId.toString())
            );
        }));
    });
});
