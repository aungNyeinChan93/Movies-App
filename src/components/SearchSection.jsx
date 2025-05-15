import React from 'react';

const SearchSection = ({ search, setSearch }) => {

    return (
        <React.Fragment>
            <section className='w-full text-center my-4 mb-10'>
                <div>
                    <form action="">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search your Movies!'
                            className='p-4 my-2 w-[400px] bg-blue-200 border-0 text-green-600 text-xl rounded-2xl' />
                    </form>
                    {search}
                </div>
            </section>
        </React.Fragment>
    );
};

export default SearchSection;