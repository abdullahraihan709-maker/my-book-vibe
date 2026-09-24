import Image from "next/image";
import Link from "next/link";
import { Book } from "@/components/types/bookDataTypes";

interface ListedBooksCardProps {
    book: Book;
}

const ListedBooksCard = ({ book }: ListedBooksCardProps) => {
    const {
        bookId,
        bookName,
        author,
        image,
        tags,
        publisher,
        yearOfPublishing,
        totalPages,
        category,
        rating,
    } = book;

    return (
        <div className="bg-base-100 border border-slate-200/80 rounded-3xl p-6 mb-6 flex flex-col lg:flex-row gap-6 items-center lg:items-stretch shadow-sm hover:shadow-md transition-all duration-300">
           
            {/* Book Cover Image Box Start */}
            <div className="bg-slate-100 rounded-2xl p-6 flex justify-center items-center w-full lg:w-60 shrink-0 min-h-[230px]">
                <div className="relative w-32 h-40 drop-shadow-md">
                    <Image
                        src={image}
                        alt={bookName}
                        fill
                        unoptimized
                        className="object-contain rounded-md"
                    />
                </div>
            </div>
            {/* Book Cover Image Box End */}


            {/* Book Details Section Start */}
            <div className="flex-1 flex flex-col justify-between w-full space-y-4">
                <div className="space-y-3">
                    
                    {/* Title & Author Start */}
                    <div>
                        <h3 className="font-bold text-2xl text-slate-800 hover:text-[#23BE0A] transition-colors">
                            {bookName}
                        </h3>
                        <p className="text-slate-500 font-medium text-base mt-1">
                            By : <span className="text-slate-700 font-semibold">{author}</span>
                        </p>
                    </div>
                    {/* Title & Author End */}

            


                    {/* Tags & Year Start */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-bold text-slate-900 text-sm">Tag</span>
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-xs font-semibold"
                            >
                                #{tag}
                            </span>
                        ))}

                        <div className="flex items-center gap-2 text-slate-500 text-sm sm:ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Year of Publishing: {yearOfPublishing}</span>
                        </div>
                    </div>
                    {/* Tags & Year End */}




                    {/* Metadata Row Start */}
                    <div className="flex items-center gap-6 flex-wrap text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Page {totalPages}</span>
                        </div>
                    </div>
                    {/* Metadata Row End */}

                </div>
                
                



                

                {/* Bottom Status Badges & View Details Link Start */}
                <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-4 py-2 rounded-full bg-[#328EFF]/15 text-[#328EFF] text-sm font-medium">
                        Category: {category}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-[#FFAC33]/15 text-[#FFAC33] text-sm font-medium flex items-center gap-1">
                        Rating: {rating.toFixed(1)}
                    </span>
                    <Link
                        href={`/books/${bookId}`}
                        className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none rounded-full px-6 text-sm font-semibold ml-auto transition-all"
                    >
                        View Details
                    </Link>
                </div>
                {/* Bottom Status Badges & View Details Link End */}

            </div>
            {/* Book Details Section End */}
            
        </div>
    );
};

export default ListedBooksCard;