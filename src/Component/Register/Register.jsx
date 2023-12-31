import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/Authprovider';

const Register = () => {

    const {createUser} = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggeduser = result.user;
            console.log(loggeduser)
            navigate(from, { replace: true });
        })
      }

    return (
        <div className="hero min-h-screen bg-base-200 background text-white font-bold text-xl">
            <div className="hero-content flex-col ">
                <div className="card w-full flex-shrink-0 shadow-2xl bg-transparent card-background">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className='text-2xl text-center font-bold text-[#ef1721]'>Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name" ,{ required: true })} name='name' placeholder="Name" className="input input-bordered bg-transparent" />
                            {errors.name && <span className='text-red-600'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered bg-transparent" />
                            {errors.email && <span className='text-red-600'>email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true, minLength: 6,  maxLength: 20 })} name='password' placeholder=" password" className="input input-bordered bg-transparent" />
                            {errors.password?.type === 'required' && <span className='text-red-600'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>6 caracter is required</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>less than 20 caracter is required</span>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Cornfirm password" className="input input-bordered bg-transparent" />
                        </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]" type="submit" value="Register" />
                        </div>
                        <div>
                            <p>Don't have an account? <span className='text-[#ef1721] hover:underline'><Link to='/login'>Login</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;