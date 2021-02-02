namespace API.Helpers
{
    public class QueryParameters
    {
        private const int MaxSize = 100;
        private int _size = 50;

        public int Page { get; set; } = 1;
        public int Size
        {
            get => _size;
            set
            {
                if (value <= MaxSize && value >= 0)
                {
                    _size = value;
                }
                else
                {
                    _size = MaxSize;
                }
            }
        }

        public string _sortBy = "Id";
        public string SortBy
        {
            get => _sortBy;
            set
            {
                _sortBy = value;
            }
        }

        private string _sortOrder = "asc";
        public string SortOrder
        {
            get => _sortOrder;
            set
            {
                value = value.ToLower();
                if (value == "asc" || value == "desc")
                {
                    _sortOrder = value;
                }
            }
        }
    }
}