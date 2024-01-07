namespace ReactJsBackend.Repository
{
    public interface IHomeRepo
    {
        public bool ValidateUser(string EmailId, string Password);
    }
}
