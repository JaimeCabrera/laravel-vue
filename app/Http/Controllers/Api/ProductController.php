<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;



class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index', 'show');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('category')->orderBy('id', 'desc')->paginate(4);
        return response()->json(['ok' => true, 'products' => $products]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $data = $request->validate([
            'name' => 'required',
            'short_description' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category_id' => 'required',
            'image' => 'required|file|image'
        ]);




        /* SAVE ORIGINAL IMAGE */
        $img_url = $request['image']->store('img-products', 'public');

        // $img = Image::make($request['image'])->fit(100, 100);
        $img = Image::make(public_path("storage/{$img_url}"))->fit(500, 500);
        $img->save();
        // Storage::put('img', $img);
        // $img->store('img');
        $product = new Product([
            'name' => $data['name'],
            'short_description' => $data['short_description'],
            'description' => $data['description'],
            'url' => Str::slug($data['name'], '-'),
            'price' => $data['price'],
            'discount' => $request['discount'],
            'image' => $img_url,
            'category_id' => $data['category_id']
        ]);
        if ($product->save()) {

            return response()->json(['ok' => true, 'product' => $product]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        // $product = $product->with('category')->get();
        $category = $product->category()->get();
        return response()->json(['product' => $product, 'category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        /* delñete image */
        Storage::delete('public/' . $product->image);
        $product->delete();
        return response()->json(['ok' => true, 'product' => $product]);
    }
}
