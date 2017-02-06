import {AppModule} from "../../../App.module";
import {ApiService} from "../data/Api.service";
import {IComicPage} from "../../models/comic/IComicPage";

export class ComicDataService
{
    public prevPage: IComicPage;
    public currentPage: IComicPage;
    public nextPage: IComicPage;

    constructor(private ApiService: ApiService, private toastr)
    {
    }

    public async resetAt(chapter: number, episode: number)
    {
        // Load the current page first
        this.currentPage = await this.loadPage(chapter, episode);

        // After current page is loaded, load the next and prev
        var sidePages = await Promise.all([
            this.loadPage(chapter, episode - 1),
            this.loadPage(chapter, episode + 1)
        ]);

        this.prevPage = sidePages[0];
        this.nextPage = sidePages[1];
    }

    public async next()
    {
        this.prevPage = this.currentPage;
        this.currentPage = this.nextPage;
        this.nextPage = await this.loadPage(this.currentPage.chapter, this.currentPage.episode + 1);
    }

    public async previous()
    {
        this.currentPage = this.prevPage;
        this.nextPage = this.currentPage;
        this.prevPage = await this.loadPage(this.currentPage.chapter, this.currentPage.episode - 1);
    }

    public async loadPage(chapter: number, episode: number)
    {
        var response = await this.ApiService.get(`/comic/getPage/${chapter}/${episode}`);

        if (!response.data.success)
        {
            this.toastr.error(response.data.message);
        }

        return response.data.data;
    }
}

AppModule.service("ComicDataService", ComicDataService);
