import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Modals = ({open, closeModal, id}) => {
    const { register, handleSubmit } = useForm();
    //const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch()

    const submit = (data) => {
        const product = {
            id,
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

  const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => closeModal()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Edit Product
                      </Dialog.Title>
                    </div>
                    {/* <label htmlFor="my-modal-3" onClick={() => closeModal()} className="btn btn-sm btn-circle bg-none absolute right-2 top-2">✕</label> */}
                    <button onClick={() => closeModal()} className="btn btn-square btn-outline border-none right-2 top-2 absolute">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
                  </div>
                  <div className='flex justify-center items-center h-full '>
        <form
          className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
          onSubmit={handleSubmit(submit)}
        >
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='model'>
              Model
            </label>
           {/* {
            products.filter((product) => product._id === id).map((p) => <input type='text' id='model' {...register("model")} defaultValue={p.model} className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />)
           } */}
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
              Price
            </label>
            <input type='number' name='price' id='price' {...register("price")} className="py-2 px-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
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
  
          <div className='flex justify-center items-center w-full'>
            <button
              className=' px-4 py-2 mt-2 btn-wide bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    );
};

export default Modals;