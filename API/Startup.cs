using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace API
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			var logger = services.BuildServiceProvider().GetService<ILogger>();

			services.AddMvc();

			// Add Authentication services.
			//Configure Auth
			var clientId = Configuration["AzureAd:ClientId"];
			var tenantId = Configuration["AzureAd:TenantId"];
			var issuer = $"https://sts.windows.net/{tenantId}/";

			var serviceProvider = services.BuildServiceProvider();
			var loggerFactory = serviceProvider.GetService<ILoggerFactory>();

			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddJwtBearer(options => {
					options.Authority = "https://login.microsoftonline.com/common/";
					options.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateIssuer = true,
						ValidIssuer = issuer,
						ValidateAudience = true,
						ValidAudiences = new string[] { clientId },
						ValidateLifetime = true
					};
					options.Events = new MyJwtBearerEvents(loggerFactory.CreateLogger<MyJwtBearerEvents>());
					options.SaveToken = true;
				});

			services.AddAuthorization();
		}
		
		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseStaticFiles();

			app.UseAuthentication();

			app.UseMvc();
		}
	}
}
