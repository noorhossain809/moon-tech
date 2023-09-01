import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const submit = (data) => {
        const product = {
            model: data.model,
            brand: data.brand,
            status: data.status === "true" ? true : false,
            price: data.price,
            keyFeature: [
              data.keyFeature1,
              data.keyFeature2,
              data.keyFeature3,
              data.keyFeature4,
            ],
            spec: [],
          };
          console.log(product)
    }
    return (
        <div className='flex justify-center items-center h-full '>
        <form
          className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
          onSubmit={handleSubmit(submit)}
        >
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='model'>
              Model
            </label>
            <input type='text' id='model' {...register("model")} className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='image'>
              Image
            </label>
            <input type='file' name='image' id='image' {...register("image")} 
            className="py-2 px-3 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
            />
          </div>
  
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' htmlFor='brand'>
              Brand
            </label>
            <select name='brand' id='brand' {...register("brand")} className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
              <option value='amd'>AMD</option>
              <option value='intel'>Intel</option>
            </select>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='price'>
              Image
            </label>
            <input type='text' name='price' id='price' {...register("price")} className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
          </div>
  
          <div className='flex flex-col w-full max-w-xs'>
            <h1 className='mb-3'>Availability</h1>
            <div className='flex gap-3'>
              <div>
                <input
                
                  type='radio'
                  id='available'
                  value={true}
                  {...register("status")}
                />
                <label className='ml-2 text-lg' htmlFor='available'>
                  Available
                </label>
              </div>
              <div>
                <input
                className="peer/draft"
                  type='radio'
                  id='stockOut'
                  name='status'
                  checked 
                  value={false}
                  {...register("status")}
                />
                <label
                for="draft"
                 className='ml-2 text-lg peer-checked/draft' htmlFor='stockOut'>
                  Stock out
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full max-w-xs'></div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='keyFeature1'>
              Key Feature 1
            </label>
            <input
            className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type='text'
              name='keyFeature1'
              id='keyFeature1'
              {...register("keyFeature1")}
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='keyFeature2'>
              Key Feature 2
            </label>
            <input
            className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type='text'
              name='keyFeature2'
              id='keyFeature2'
              {...register("keyFeature2")}
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='keyFeature3'>
              Key Feature 3
            </label>
            <input
            className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type='text'
              name='keyFeature3'
              id='keyFeature3'
              {...register("keyFeature3")}
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='keyFeature4'>
              Key Feature 4
            </label>
            <input
            className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type='text'
              name='keyFeature4'
              id='keyFeature4'
              {...register("keyFeature4")}
            />
          </div>
  
          <div className='flex justify-between items-center w-full'>
            <button
              className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddProduct;