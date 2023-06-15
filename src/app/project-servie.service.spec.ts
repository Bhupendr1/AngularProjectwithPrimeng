import { TestBed } from '@angular/core/testing';

import { ProjectServieService } from './project-servie.service';

describe('ProjectServieService', () => {
  let service: ProjectServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
