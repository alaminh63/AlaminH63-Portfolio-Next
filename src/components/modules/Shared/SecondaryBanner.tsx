
interface SecondaryBannerProps {
  title: string;
}

export default function SecondaryBanner({ title }: SecondaryBannerProps) {
  return (
    <div
      className="h-24    flex items-center  justify-center  "
      style={{
        backgroundImage: 'linear-gradient(60deg, rgba(0,0,0,.8), rgba(47,79,79,.8) 70%), url("https://www.shutterstock.com/shutterstock/videos/3606751217/thumb/1.jpg?ip=x480")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-white  text-3xl   ">{title}</h1>
    </div>
  );
}
