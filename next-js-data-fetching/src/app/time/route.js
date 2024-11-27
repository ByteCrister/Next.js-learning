// export const dynamic = 'force-dynamic' //* stops cache returning in production build


export const GET = async ()=>{
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
};