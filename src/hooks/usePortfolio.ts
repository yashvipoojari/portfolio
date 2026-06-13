import data from '../data/portfolio.json';
import type { PortfolioData } from '../types/portfolio';

const portfolioData = data as PortfolioData;

export function usePortfolio(): PortfolioData {
  return portfolioData;
}