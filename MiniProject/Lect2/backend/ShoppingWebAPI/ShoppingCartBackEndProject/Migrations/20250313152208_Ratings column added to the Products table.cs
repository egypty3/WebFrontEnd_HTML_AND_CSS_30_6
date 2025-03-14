using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShoppingCartBackEndProject.Migrations
{
    /// <inheritdoc />
    public partial class RatingscolumnaddedtotheProductstable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products");

            migrationBuilder.AddColumn<double>(
                name: "Ratings",
                table: "Products",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            // Ensure all existing Product records have valid CategoryId values
            migrationBuilder.Sql("UPDATE Products SET CategoryId = (SELECT TOP 1 Id FROM Categories) WHERE CategoryId IS NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict); // Remove cascade on delete
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Ratings",
                table: "Products");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
