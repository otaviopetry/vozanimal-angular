import { HttpClient } from '@angular/common/http';
import { waitForAsync } from '@angular/core/testing';
import { of, Subscription } from 'rxjs';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { LoadPageService } from './load-page.service';

import { MockStore, getMockStore } from '@ngrx/store/testing';

describe('[Unit] - LoadPageService', () => {
    let service: LoadPageService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    const mockStore: MockStore = getMockStore();
    const subscription: Subscription = new Subscription();

    beforeEach((): void => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new LoadPageService(
            httpClientSpy,
            mockStore,
        );
    });

    afterEach((): void => {
        subscription.unsubscribe();
    });

    describe('loadPageBySlug', (): void => {
        it('should call the api passing the page slug', (): void => {
            const mockedSlug: string = 'randomSlug';

            httpClientSpy.get.and.returnValue(of());

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

        it('should request 10 itens per page if no perPage argument has been passed in', (): void => {
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
                jasmine.stringContaining('per_page=10'),
            );
        });

        it('should request the wanted itens per page if the perPage argument has been passed in', (): void => {
            const mockedId: number = 55;
            const mockedPageRequestResponse: IPageData[] = [
                {
                    id: mockedId,
                } as IPageData,
            ];

            const mockedPerPage: number = 30;

            spyOn(service, 'loadPageBySlug').and.returnValue(
                of(mockedPageRequestResponse)
            );
            httpClientSpy.get.and.returnValue(of());

            subscription.add(
                service
                    .loadPagesByParentSlug('anySlug', mockedPerPage)
                    .subscribe((): void => {})
                );

            expect(httpClientSpy.get).toHaveBeenCalledWith(
                jasmine.stringContaining(`per_page=${mockedPerPage}`),
            );
        })
    });
});
