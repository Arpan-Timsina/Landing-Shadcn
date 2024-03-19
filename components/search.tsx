'use client';
import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import { Button } from './ui/button';

export function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Simulated static suggestions array
  const staticSuggestions = [
    'Learn tailwindcss',
    'Learn Next and React',
    'Weather forecast',
    'Latest news',
    'Today\'s events',
    'Football scores',
    'Recipes',
    // Add more suggestions as needed
  ];

  useEffect(() => {
    // Filter suggestions based on the current search term
    const filteredSuggestions = staticSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [searchTerm]);

  return (
    <div className="relative">
        <div className='flex flex-row'>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="rounded-full border border-primary  hover:bg-secondary"
      />
      <Button variant='ghost' className='rounded-full p-3'><MagnifyingGlassIcon/></Button>
      </div>
      {searchTerm&&suggestions.length > 0 && (
        <ul className="absolute top-full  w-full mt-1 border rounded-md shadow-lg ">
          {searchTerm&&suggestions.map((suggestion, index) => (
            <li key={index} className="px-3 py-2 cursor-pointer hover:bg-secondary">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
