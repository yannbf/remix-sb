import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({
  params: { slug },
  request
}) => {
  let url = new URL(request.url);
  const params = Object.fromEntries(new URLSearchParams(url.searchParams));
  return { slug, params };
};

export default function PostSlug() {
  const { slug, params } = useLoaderData();
  const userImage = params.userType === 'VIP' ? 'https://st3.depositphotos.com/13193658/33562/i/450/depositphotos_335620384-stock-photo-handsome-king-crown-screaming-isolated.jpg' : 'https://www.studiohirefirstoption.com/wp-content/uploads/2021/05/Normal-440x234.jpg'
  return (
    <main>
      <h1>Some Post: {slug}</h1>
      <h3>Label: {params.label}</h3>
      <p>User type: <strong>{params.userType}</strong></p>
      <img style={{ height: 230 }} src={userImage} />
      <div>
        <strong>Voucher:</strong>{' '}
        <input data-testid="voucher"  />
      </div>
    </main>
  );
}
