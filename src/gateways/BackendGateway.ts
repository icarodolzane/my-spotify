import { Category } from "@/components/ChooseCategory";

type CategoriesResponse = {
  categories: {
    items: {
      id: string;
      name: string;
      icons: {
        url: string;
      }[]
    }[]
  }
}

export class BackendGateway {
  static async fetchCategories(): Promise<Category[]> {
    const res = await fetch('/api/categories')
    const json = await res.json();
    const data = json as CategoriesResponse;

    return data.categories.items.map(item => {
      return {
        id: item.id,
        name: item.name,
        url: item.icons[0].url
      }
    })
  }
}