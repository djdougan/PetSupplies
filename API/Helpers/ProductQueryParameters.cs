
namespace API.Helpers{

    public class ProductQueryParameters: QueryParameters{

        public string Name { get; set;}
        public string Description { get; set;}
        public string UPC {get; set;}
        public decimal? MinPrice{ get; set;}
        public decimal? MaxPrice{ get; set;}
        public int? ProductTypeId{get; set;}
        public int? ProductBrandId{get; set;}

    }
}