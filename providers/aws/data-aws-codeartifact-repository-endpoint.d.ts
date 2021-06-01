import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodeartifactRepositoryEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#domain DataAwsCodeartifactRepositoryEndpoint#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.
     */
    readonly domainOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#format DataAwsCodeartifactRepositoryEndpoint#format}.
     */
    readonly format: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#repository DataAwsCodeartifactRepositoryEndpoint#repository}.
     */
    readonly repository: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html aws_codeartifact_repository_endpoint}.
 */
export declare class DataAwsCodeartifactRepositoryEndpoint extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html aws_codeartifact_repository_endpoint} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCodeartifactRepositoryEndpointConfig);
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    private _format;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
    get id(): string;
    private _repository;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryEndpoint(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
