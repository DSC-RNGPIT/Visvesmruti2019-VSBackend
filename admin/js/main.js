(function ($) {
 "use strict";
 
 		$("#adminlogin").on('submit', function (e) {
			if(document.getElementById("email").value.length < 1){
				alert("Please Enter Valid Email Address");
				return false;
			}
			if(document.getElementById("pass").value.length < 1){
				alert("Please Enter Correct Password");
				return false;
			}
			return true;
		});
		
		/*-----------------------------
			Menu Stick
		---------------------------------*/
		$(".sicker-menu").sticky({topSpacing:0});

		$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
			  e.stopPropagation();
			});
			
		/*--------------------------
		 mCustomScrollbar
		---------------------------- */	
			$(window).on("load",function(){
				$(".message-menu, .notification-menu, .comment-scrollbar, .notes-menu-scrollbar, .project-st-menu-scrollbar").mCustomScrollbar({
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
					
				});
				$(".timeline-scrollbar").mCustomScrollbar({
					setHeight:636,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
					
				});
				$(".project-list-scrollbar").mCustomScrollbar({
					setHeight:636,
					theme:"light-2"
				});
				$(".messages-scrollbar").mCustomScrollbar({
					setHeight:503,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
				$(".chat-scrollbar").mCustomScrollbar({
					setHeight:250,
					theme:"light-2"
				});
				$(".widgets-chat-scrollbar").mCustomScrollbar({
					setHeight:335,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
				$(".widgets-todo-scrollbar").mCustomScrollbar({
					setHeight:322,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
				$(".user-profile-scrollbar").mCustomScrollbar({
					setHeight:1820,
					autoHideScrollbar: true,
					scrollbarPosition: "outside",
					theme:"light-1"
				});
			});
			
			var tableData1 = $('.testTable')
			// for (var i = 1; i < 25; i++) {
			// 	let x = "<tr><td></td>"

			// 	x +=                        `
   //                                          <td>${i}</td>
   //                                          <td>Web Development</td>
   //                                          <td>admin@uttara.com</td>
   //                                          <td>+8801962067309</td>
   //                                          <td>Aber Ltd.</td>
   //                                          <td class="datatable-ct"><span class="pie">Paid</span>
   //                                          </td>
   //                                          <td>${i % 2 == 0 ? "Yes" : "No"}</td>
   //                                      </tr>`
   //                                      tableData.append(x)
			// }

			$('.form-control').change(function() {
				var choice = $('.form-control').val()
				console.log(choice)
				var tableData = $('.testTable')
				var e
				if (choice === 'round1') {
					e = 24
				} else if (choice === 'round2') {
					e = 12
				} else {
					e = 8
				}
				for (let i = 1; i <= e; i++) {
					console.log("executed")
				let x = "<tr><td></td>"

				x += `
                    <td>${i}</td>
                    <td>Web Development</td>
                    <td>admin@uttara.com</td>
                    <td>+8801962067309</td>
                    <td>Aber Ltd.</td>
                    <td class="datatable-ct"><span class="pie">Paid</span>
                    </td>
                    <td>${i % 2 == 0 ? "Yes" : "No"}</td>
                    </tr>`
                    console.log(x)
                    tableData.append(x)
				}
			})
			
			/*----------------------------
		 jQuery MeanMenu
		------------------------------ */
		jQuery('nav#dropdown').meanmenu();	
		
		// Collapse Chat function
			$('.chat-icon-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-comments').toggleClass('fa-remove');
			});
		// Collapse ibox function
			$('.collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline-content" ).slideToggle( "slow" );
			});
			$(".collapse-close").on('click', function(){
				$( "div.about-sparkline" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.smart-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".smart-sparkline-list" ).slideToggle( "slow" );
			});
			$(".smart-collapse-close").on('click', function(){
				$( "div.sparkline-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline7-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline7-graph" ).slideToggle( "slow" );
			});
			$(".sparkline7-collapse-close").on('click', function(){
				$( "div.sparkline7-list" ).fadeOut( 600 );
			});
		// Collapse ibox function
			$('.sparkline8-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline8-graph" ).slideToggle( "slow" );
			});
			$(".sparkline8-collapse-close").on('click', function(){
				$( "div.sparkline8-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline9-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline9-graph" ).slideToggle( "slow" );
			});
			$(".sparkline9-collapse-close").on('click', function(){
				$( "div.sparkline9-list" ).fadeOut( 600 );
			});
			
		// Collapse ibox function
			$('.sparkline10-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline10-graph" ).slideToggle( "slow" );
			});
			$(".sparkline10-collapse-close").on('click', function(){
				$( "div.sparkline10-list" ).fadeOut( 600 );
			});
		// Collapse ibox function
			$('.sparkline11-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline11-graph" ).slideToggle( "slow" );
			});
			$(".sparkline11-collapse-close").on('click', function(){
				$( "div.sparkline11-list" ).fadeOut( 600 );
			});
			
			
		// Collapse ibox function
			$('.sparkline12-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline12-graph" ).slideToggle( "slow" );
			});
			$(".sparkline12-collapse-close").on('click', function(){
				$( "div.sparkline12-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline13-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline13-graph" ).slideToggle( "slow" );
			});
			$(".sparkline13-collapse-close").on('click', function(){
				$( "div.sparkline13-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline14-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline14-graph" ).slideToggle( "slow" );
			});
			$(".sparkline14-collapse-close").on('click', function(){
				$( "div.sparkline14-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline15-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline15-graph" ).slideToggle( "slow" );
			});
			$(".sparkline15-collapse-close").on('click', function(){
				$( "div.sparkline15-list" ).fadeOut( 600 );
			});
 
		// Collapse ibox function
			$('.sparkline16-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline16-graph" ).slideToggle( "slow" );
			});
			$(".sparkline16-collapse-close").on('click', function(){
				$( "div.sparkline16-list" ).fadeOut( 600 );
			});
 
		 
 
})(jQuery); 