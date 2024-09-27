 import Image from "next/image";
 import {Card} from "@/components/ui/card";

const UserCard = ({ type }: { type: string }) => {
  return (
    <Card className="p-4 flex-1 min-w-[130px]  ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 rounded-full text-green-600 dark:text-white text-xl">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-black dark:text-white">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-black dark:text-white">{type}s</h2>
    </Card>
  );
};

export default UserCard;

