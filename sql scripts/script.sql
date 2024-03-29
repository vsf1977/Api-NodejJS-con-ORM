USE [Facturacion]
GO
/****** Object:  User [Usuario]    Script Date: 6/02/2023 4:02:57 p. m. ******/
CREATE LOGIN [Usuario] WITH PASSWORD=N'987654321' 
    MUST_CHANGE, 
    DEFAULT_DATABASE=[Facturacion], 
    CHECK_EXPIRATION=ON, 
    CHECK_POLICY=ON
GO
CREATE USER [Usuario] FOR LOGIN [Usuario] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Usuario]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 6/02/2023 4:02:57 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[IDCliente] [uniqueidentifier] NOT NULL,
	[Nombre] [varchar](30) NOT NULL,
	[Apellidos] [varchar](30) NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[IDCliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetalleFactura]    Script Date: 6/02/2023 4:02:57 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetalleFactura](
	[IDDetalleFactura] [uniqueidentifier] NOT NULL,
	[IDFactura] [uniqueidentifier] NOT NULL,
	[IDProducto] [uniqueidentifier] NOT NULL,
	[cantidad] [int] NOT NULL,
 CONSTRAINT [PK_DetalleFactura] PRIMARY KEY CLUSTERED 
(
	[IDDetalleFactura] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Factura]    Script Date: 6/02/2023 4:02:57 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Factura](
	[IDFactura] [uniqueidentifier] NOT NULL,
	[IDCliente] [uniqueidentifier] NOT NULL,
	[fecha] [date] NOT NULL,
 CONSTRAINT [PK_Factura] PRIMARY KEY CLUSTERED 
(
	[IDFactura] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Producto]    Script Date: 6/02/2023 4:02:57 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto](
	[IDProducto] [uniqueidentifier] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[precio] [decimal](10, 2) NOT NULL,
 CONSTRAINT [PK_Productos] PRIMARY KEY CLUSTERED 
(
	[IDProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cliente] ([IDCliente], [Nombre], [Apellidos], [FechaNacimiento]) VALUES (N'63da7429-d626-4ed4-a820-3de4c3970336', N'Sophie Catalina', N'Silva Santiago', CAST(N'2017-06-05' AS Date))
INSERT [dbo].[Cliente] ([IDCliente], [Nombre], [Apellidos], [FechaNacimiento]) VALUES (N'8a05c5f5-3371-4c4a-a620-5b73a38aba15', N'Rebecca', N'Johnston', CAST(N'1989-09-24' AS Date))
INSERT [dbo].[Cliente] ([IDCliente], [Nombre], [Apellidos], [FechaNacimiento]) VALUES (N'ab245ce1-4b7e-445e-911a-662e4caa4dcd', N'Meghan', N'Agosta', CAST(N'1987-02-12' AS Date))
INSERT [dbo].[Cliente] ([IDCliente], [Nombre], [Apellidos], [FechaNacimiento]) VALUES (N'a6f74b80-3b8c-4406-9392-88f98372014e', N'Jillian', N'Saulnier', CAST(N'1992-03-07' AS Date))
INSERT [dbo].[Cliente] ([IDCliente], [Nombre], [Apellidos], [FechaNacimiento]) VALUES (N'c29cd27e-04a5-427d-9171-cf42aea66da2', N'Laura', N'Stacey', CAST(N'1994-05-05' AS Date))
GO
INSERT [dbo].[Factura] ([IDFactura], [IDCliente], [fecha]) VALUES (N'5c2e65c0-11b5-4282-98ae-14b053654b00', N'ab245ce1-4b7e-445e-911a-662e4caa4dcd', CAST(N'2022-05-05' AS Date))
INSERT [dbo].[Factura] ([IDFactura], [IDCliente], [fecha]) VALUES (N'91b297ef-bc45-4d4e-8904-22f7b31cd2ba', N'63da7429-d626-4ed4-a820-3de4c3970336', CAST(N'2023-01-01' AS Date))
GO
INSERT [dbo].[Producto] ([IDProducto], [nombre], [precio]) VALUES (N'c79a3c81-b282-4aed-8763-69c19995acb0', N'Yuca', CAST(500.00 AS Decimal(10, 2)))
INSERT [dbo].[Producto] ([IDProducto], [nombre], [precio]) VALUES (N'f085029f-72bf-41a8-9f08-6d05fc1b558d', N'Platano', CAST(1000.00 AS Decimal(10, 2)))
INSERT [dbo].[Producto] ([IDProducto], [nombre], [precio]) VALUES (N'da7f282a-6548-4b8b-86fa-8db24a5e310a', N'Papa', CAST(1500.00 AS Decimal(10, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IDDetalleFactura], [IDFactura], [IDProducto], [cantidad]) VALUES (N'06a0c231-30d9-4ddb-ad41-58ab0eb896bc', N'5c2e65c0-11b5-4282-98ae-14b053654b00', N'f085029f-72bf-41a8-9f08-6d05fc1b558d', 100)
INSERT [dbo].[DetalleFactura] ([IDDetalleFactura], [IDFactura], [IDProducto], [cantidad]) VALUES (N'4d04c88c-32de-4a22-b164-c2ae16be8b9e', N'91b297ef-bc45-4d4e-8904-22f7b31cd2ba', N'c79a3c81-b282-4aed-8763-69c19995acb0', 22)
INSERT [dbo].[DetalleFactura] ([IDDetalleFactura], [IDFactura], [IDProducto], [cantidad]) VALUES (N'5ac4746f-439f-4ac1-b8ee-ea4c8a00baf3', N'5c2e65c0-11b5-4282-98ae-14b053654b00', N'da7f282a-6548-4b8b-86fa-8db24a5e310a', 2)
INSERT [dbo].[DetalleFactura] ([IDDetalleFactura], [IDFactura], [IDProducto], [cantidad]) VALUES (N'28559f44-44dd-4da3-af27-eab4f5386216', N'91b297ef-bc45-4d4e-8904-22f7b31cd2ba', N'f085029f-72bf-41a8-9f08-6d05fc1b558d', 23)
INSERT [dbo].[DetalleFactura] ([IDDetalleFactura], [IDFactura], [IDProducto], [cantidad]) VALUES (N'2b5fb0af-fb0f-49fa-9cb0-fb8a2487b8c5', N'91b297ef-bc45-4d4e-8904-22f7b31cd2ba', N'da7f282a-6548-4b8b-86fa-8db24a5e310a', 14)
GO
ALTER TABLE [dbo].[DetalleFactura]  WITH CHECK ADD  CONSTRAINT [FK_DetalleFactura_Factura] FOREIGN KEY([IDFactura])
REFERENCES [dbo].[Factura] ([IDFactura])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DetalleFactura] CHECK CONSTRAINT [FK_DetalleFactura_Factura]
GO
ALTER TABLE [dbo].[DetalleFactura]  WITH CHECK ADD  CONSTRAINT [FK_DetalleFactura_Producto] FOREIGN KEY([IDProducto])
REFERENCES [dbo].[Producto] ([IDProducto])
GO
ALTER TABLE [dbo].[DetalleFactura] CHECK CONSTRAINT [FK_DetalleFactura_Producto]
GO
