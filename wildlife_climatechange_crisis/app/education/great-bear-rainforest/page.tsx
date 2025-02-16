"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Pause, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GreatBearRainforest() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white transition-colors duration-500">
      {/* Video Player */}
      <div className="relative aspect-video">
  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
    {isPlaying ? (
      <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/7wWQ-0CKv1M?si=WM_nMhdUEUwk5GL2"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      ></iframe>
    ) : (
      <>
        <img
          src="/Rainforest.webp"
          alt="Rainforest"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setIsPlaying(true)}
        />
        {/* Button positioned on top of the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            size="lg"
            className="text-black bg-white/50 hover:bg-white/70 rounded-full p-4"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12" />}
          </Button>
        </div>
      </>
    )}
  </div>
</div>


      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/education"
            className="text-black hover:text-gray-300 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Education Hub
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              The Great Bear Rainforest
            </h1>
            <p className="text-black mb-6">
              Explore the unique ecosystem of British Columbia&apos;s coastal
              temperate rainforest and learn about the diverse wildlife that
              calls it home.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Key Learning Points
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      The Great Bear Rainforest is the largest intact temperate
                      rainforest in the world
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Home to unique species like the Spirit Bear and coastal
                      wolves
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Climate change impacts on the ecosystem and wildlife
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Discussion Questions
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      How does climate change affect the Great Bear Rainforest
                      ecosystem?
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      What role do Indigenous communities play in conservation
                      efforts?
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      How can we help protect this unique environment?
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Facts</h2>
                <ul className="space-y-4">
                  <li>
                    <span className="block font-semibold">Size</span>
                    <span className="text-gray-600">6.4 million hectares</span>
                  </li>
                  <li>
                    <span className="block font-semibold">Location</span>
                    <span className="text-gray-600">
                      Central and northern coast of British Columbia
                    </span>
                  </li>
                  <li>
                    <span className="block font-semibold">Key Species</span>
                    <span className="text-gray-600">
                      Spirit Bears, Grizzly Bears, Wolves, Salmon
                    </span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button className="w-full mb-2">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Video
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
