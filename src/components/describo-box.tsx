import DescriboPoint from "./describo-point";

export default function DescriboBox({ points }: any) {
  return (
    <div className="border-dashed border-2 border-gray-500 p-6">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {points.length > 0 ? (
          points.map((point: any) => (
            <DescriboPoint key={point.key} point={point}></DescriboPoint>
          ))
        ) : (
          <div> No products detected yet... </div>
        )}
      </ol>
    </div>
  );
}
