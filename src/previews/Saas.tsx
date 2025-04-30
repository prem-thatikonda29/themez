import React from 'react'

function Saas() {
  return (
    <section>
        <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Transform Your Business with Our SaaS Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Streamline your workflow, boost productivity, and scale your business with our powerful platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Saas
