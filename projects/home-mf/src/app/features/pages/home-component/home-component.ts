import { Component } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { CategorySection } from '../../components/category-section/category-section';
import { TrendingCakes } from '../../components/trending-cakes/trending-cakes';
import { BestSellers } from '../../components/best-sellers/best-sellers';
import { Newsletter } from '../../components/newsletter/newsletter';
import { CustomerReviews } from '../../components/customer-reviews/customer-reviews';
import { OfferBanner } from '../../components/offer-banner/offer-banner';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { ShopByOccasion } from '../../components/shop-by-occasion/shop-by-occasion';
import { CustomCake } from '../../components/custom-cake/custom-cake';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-home-component',
  imports: [
    HeroBanner,
    CategorySection,
    TrendingCakes,
    BestSellers,
    Newsletter,
    CustomerReviews,
    OfferBanner,
    FeaturedProducts,
    ShopByOccasion,
    CustomCake,
    Footer

  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
