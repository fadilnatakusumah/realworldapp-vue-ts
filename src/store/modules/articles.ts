import { Module, VuexModule, getModule, Mutation, Action } from "vuex-module-decorators"

import store from '@/store'
import { getGlobalFeed } from '@/store/api'
import { Article } from '../models';

type feedType = 'global' | 'user'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'articles',
  store
})
class ArticlesModule extends VuexModule {
  feed: Article[] = []
  usersFeed: Article[] = []

  @Mutation
  setFeed(articles: Article[]) {
    this.feed = articles;
  }

  @Action({ commit: 'setFeed' })
  async refreshFeed(feedType: feedType) {
    const globalFeedResponse = await getGlobalFeed()
    return globalFeedResponse.articles
  }
}


export default getModule(ArticlesModule);