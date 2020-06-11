import { gateway, ProductBase } from '@moltin/sdk';

interface LampProduct extends ProductBase {
  background_color: string;
  background_colour: string;
  bulb: string;
  bulb_qty: string;
  finish: string;
  material: string;
  max_watt: string;
  new: string;
  on_sale: string;
}

async function main() {
  const client_id = 'HvmUtpjmMSYmWs7zR367WYETN2aj51yXzxrxoWXu0x';
  const g = gateway({ client_id });

  const productPage = await g.Products.All();
  const product = productPage.data[0]; // type ProductBase

  const lampPage = await g.Products.All<LampProduct>();
  const lamp = lampPage.data[0]; // type LampProduct

  const lamp2 = await g.Products.Get(lampPage.data[2].id);
  console.log(lamp2.data);
}

main().catch(console.error);
