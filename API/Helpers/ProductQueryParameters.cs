
namespace API.Helpers{

    public class ProductQueryParameters: QueryParameters{

        public string Name { get; set;}
        public string Description { get; set;}
        public string UPC {get; set;}
        public decimal? MinPrice{ get; set;}
        public decimal? MaxPrice{ get; set;}
        public string ProductType{get; set;}
        public string ProductBrand{get; set;}

    }
}