import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  author,
  image,
  category
}) => {
  return (
    <Link to={`/blog/${id}`} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform group-hover:shadow-md h-full flex flex-col">
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{readTime}</span>
          </div>
          
          <h3 className="font-medium text-gray-800 group-hover:text-terracota-600 transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
            {excerpt}
          </p>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <User className="w-4 h-4 mr-2" />
              <span>{author}</span>
            </div>
            <span className="text-xs font-medium px-3 py-1 bg-terracota-50 text-terracota-700 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;