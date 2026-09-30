'use client'

import { Book } from "@/components/types/bookDataTypes";
import { BooksContext } from "@/context/BooksContext";

import { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];


const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};



const PagesToRead = () => {

    const { readBooks } = useContext(BooksContext);

    const data = readBooks.map((book: Book, index: number) => {
        return {
            name: book.bookName,
            uv: book.totalPages,
            pv: index + 1,
            amt: index + 1,
        }
    })


    return (
        <div className="container mx-auto my-5 px-4">
            { readBooks.length > 0 ? (
                <div className="rounded-3xl bg-gray-100 px-6 py-8 sm:px-10 sm:py-12">
                    <div className="mx-auto max-w-175">
                        <BarChart
                            style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={data}
                            margin={{
                                top: 20,
                                right: 10,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="4 4"
                                vertical={false}
                                stroke="#d1d5db"
                            />
                            <Tooltip cursor={{ fillOpacity: 0.15 }} />
                            <XAxis
                                dataKey="name"
                                tick={{ fill: '#6b7280', fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                width="auto"
                                tick={{ fill: '#6b7280', fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="uv" shape={TriangleBar} activeBar>
                                <LabelList content={CustomColorLabel} position="top" />
                            </Bar>
                        </BarChart>
                    </div>
                </div>
                ) : <p className="font-bold text-4xl text-center">No read books to display</p>
            }
        </div>
    );
};

export default PagesToRead;





