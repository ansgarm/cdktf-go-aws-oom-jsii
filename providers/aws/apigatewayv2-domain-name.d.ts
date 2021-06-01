import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2DomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name Apigatewayv2DomainName#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags Apigatewayv2DomainName#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags_all Apigatewayv2DomainName#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * domain_name_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}
     */
    readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration[];
    /**
     * mutual_tls_authentication block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}
     */
    readonly mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#timeouts Apigatewayv2DomainName#timeouts}
     */
    readonly timeouts?: Apigatewayv2DomainNameTimeouts;
}
export interface Apigatewayv2DomainNameDomainNameConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#certificate_arn Apigatewayv2DomainName#certificate_arn}.
     */
    readonly certificateArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#endpoint_type Apigatewayv2DomainName#endpoint_type}.
     */
    readonly endpointType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#security_policy Apigatewayv2DomainName#security_policy}.
     */
    readonly securityPolicy: string;
}
export interface Apigatewayv2DomainNameMutualTlsAuthentication {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_uri Apigatewayv2DomainName#truststore_uri}.
     */
    readonly truststoreUri: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_version Apigatewayv2DomainName#truststore_version}.
     */
    readonly truststoreVersion?: string;
}
export interface Apigatewayv2DomainNameTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#create Apigatewayv2DomainName#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#update Apigatewayv2DomainName#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name}.
 */
export declare class Apigatewayv2DomainName extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2DomainNameConfig);
    get apiMappingSelectionExpression(): string;
    get arn(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _domainNameConfiguration;
    get domainNameConfiguration(): Apigatewayv2DomainNameDomainNameConfiguration[];
    set domainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration[]);
    get domainNameConfigurationInput(): Apigatewayv2DomainNameDomainNameConfiguration[];
    private _mutualTlsAuthentication?;
    get mutualTlsAuthentication(): Apigatewayv2DomainNameMutualTlsAuthentication[];
    set mutualTlsAuthentication(value: Apigatewayv2DomainNameMutualTlsAuthentication[]);
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): Apigatewayv2DomainNameMutualTlsAuthentication[] | undefined;
    private _timeouts?;
    get timeouts(): Apigatewayv2DomainNameTimeouts;
    set timeouts(value: Apigatewayv2DomainNameTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): Apigatewayv2DomainNameTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
