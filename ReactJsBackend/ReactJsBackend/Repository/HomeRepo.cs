
using ReactJsBackend.Models;

namespace ReactJsBackend.Repository
{
    public class HomeRepo : IHomeRepo
    {

        ProjectDbContext _projectDbContext;
        public HomeRepo(ProjectDbContext projectDbContext)
        {
            _projectDbContext = projectDbContext;

        }

        public bool ValidateUser(string EmailId, string Password)
        {
            var user = (from c in _projectDbContext.DBSetLogin where c.EmailId == EmailId select c).SingleOrDefault();
            return !(user is null) && user.Password == Password;
        }
    }
}
