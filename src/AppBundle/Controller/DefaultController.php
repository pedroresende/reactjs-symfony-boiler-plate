<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/api/{slug}", name="API")
     */
    public function apiAction(Request $request, $slut = null)
    {
        // replace this example code with whatever you need
        // Symfony Backend integration
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/{slug}", name="homepage2")
     */
    public function indexAction(Request $request, $slut = null)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
}
