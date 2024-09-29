'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckIcon, XIcon } from 'lucide-react';

export function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900'>
      <main className='flex-grow'>
        <section
          id='hero'
          className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4'>
              Streamline Your Workflow
            </h1>
            <p className='text-xl sm:text-2xl mb-8'>
              Choose between our Custom Coded Solution and No-Code/Low-Code
              Solution
            </p>
          </div>
        </section>

        <section id='overview' className='py-16 bg-white dark:bg-gray-800'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center'>
              Our Solutions
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    Custom Coded Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='mb-4'>
                    A fully customized solution built using Next.js to automate
                    your workflow involving form submissions, follow-up emails,
                    and SMS notifications.
                  </p>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>Full API integration (JotForm, Graph API, Twilio)</li>
                    <li>Custom workflow design and development</li>
                    <li>Error handling and advanced automation features</li>
                    <li>Thorough testing and security measures</li>
                    <li>Deployment on desired cloud infrastructure</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    No-Code/Low-Code Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='mb-4'>
                    A solution using platforms like JotForm, Zapier, and Twilio
                    to automate form submissions, follow-up emails, and SMS
                    notifications using pre-built integrations.
                  </p>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>Configuration of JotForm, Zapier, and Twilio</li>
                    <li>Creation of basic workflows for notifications</li>
                    <li>Testing to ensure proper functionality</li>
                    <li>Basic guides on managing the automation</li>
                    <li>Periodic maintenance and basic support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id='comparison' className='py-16 bg-gray-100 dark:bg-gray-700'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center'>
              Solution Comparison
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-1/3'>Feature</TableHead>
                  <TableHead>Custom Coded</TableHead>
                  <TableHead>No-Code/Low-Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Initial Cost</TableCell>
                  <TableCell>$4,000 - $5,500</TableCell>
                  <TableCell>$500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Development Time
                  </TableCell>
                  <TableCell>6-10 weeks</TableCell>
                  <TableCell>4-7 days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Customization</TableCell>
                  <TableCell>
                    <CheckIcon className='text-green-500' />
                  </TableCell>
                  <TableCell>
                    <XIcon className='text-red-500' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Scalability</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Limited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Maintenance Cost
                  </TableCell>
                  <TableCell>$200-$300/month</TableCell>
                  <TableCell>$30-$50/month</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section id='pricing' className='py-16 bg-white dark:bg-gray-800'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center'>
              Pricing
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    Custom Coded Solution
                  </CardTitle>
                  <CardDescription>
                    Tailored for businesses seeking a fully customized, scalable
                    solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mb-4'>
                    <p className='text-3xl font-bold'>$4,000 - $5,500</p>
                    <p className='text-sm text-gray-500'>One-time setup fee</p>
                  </div>
                  <ul className='mb-4 space-y-2'>
                    <li>Full API integration (JotForm, Graph API, Twilio)</li>
                    <li>Custom workflow development</li>
                    <li>Thorough testing and deployment</li>
                    <li>1 month post-launch support</li>
                    <li>Optional custom dashboard ($1,500 additional)</li>
                  </ul>
                  <p className='mb-2'>
                    <strong>Maintenance:</strong> $200-$300/month
                  </p>
                  <p>
                    <strong>Development Time:</strong> 6-10 weeks
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    No-Code/Low-Code Solution
                  </CardTitle>
                  <CardDescription>
                    Perfect for small businesses or those needing a quick setup
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mb-4'>
                    <p className='text-3xl font-bold'>$500</p>
                    <p className='text-sm text-gray-500'>One-time setup fee</p>
                  </div>
                  <ul className='mb-4 space-y-2'>
                    <li>JotForm, Zapier, Twilio setup and configuration</li>
                    <li>Basic workflow creation</li>
                    <li>Testing and documentation</li>
                    <li>Basic user training</li>
                  </ul>
                  <p className='mb-2'>
                    <strong>Maintenance:</strong> $30-$50/month
                  </p>
                  <p>
                    <strong>Development Time:</strong> 4-7 days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id='payment-plans'
          className='py-16 bg-gray-100 dark:bg-gray-700'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center'>
              Payment Plans
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    Custom Coded Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className='text-xl font-semibold mb-2'>
                    Option 1: Full Payment Upfront
                  </h3>
                  <ul className='list-disc pl-5 mb-4'>
                    <li>
                      One-time payment of $4,000 (without dashboard) or $5,500
                      (with dashboard)
                    </li>
                    <li>Includes 1 month of free maintenance</li>
                  </ul>
                  <h3 className='text-xl font-semibold mb-2'>
                    Option 2: Installment Plan
                  </h3>
                  <ul className='list-disc pl-5'>
                    <li>
                      Initial Payment: $2,000 upfront (or $2,500 with dashboard)
                    </li>
                    <li>
                      Second Payment: $1,500 at project midpoint (or $2,500 with
                      dashboard)
                    </li>
                    <li>Final Payment: $500 upon deployment</li>
                    <li>
                      Ongoing maintenance starts at $200/month (or $300/month
                      with dashboard) after the first month
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    No-Code/Low-Code Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className='text-xl font-semibold mb-2'>
                    Option 1: Full Payment Upfront
                  </h3>
                  <ul className='list-disc pl-5 mb-4'>
                    <li>One-time payment of $500</li>
                    <li>Includes 1 month of free support</li>
                  </ul>
                  <h3 className='text-xl font-semibold mb-2'>
                    Option 2: Installment Plan
                  </h3>
                  <ul className='list-disc pl-5'>
                    <li>Initial Payment: $250 upfront</li>
                    <li>
                      Final Payment: $250 upon completion of setup and
                      deployment
                    </li>
                    <li>
                      Ongoing support starts at $30-$50/month after the first
                      month
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-white dark:bg-gray-800 border-t'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <p className='text-center text-gray-500 dark:text-gray-400 text-sm'>
            © 2024 Your SaaS Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
