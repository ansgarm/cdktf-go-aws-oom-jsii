import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_arn ApiGatewayDomainName#certificate_arn}.
     */
    readonly certificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_body ApiGatewayDomainName#certificate_body}.
     */
    readonly certificateBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_chain ApiGatewayDomainName#certificate_chain}.
     */
    readonly certificateChain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_name ApiGatewayDomainName#certificate_name}.
     */
    readonly certificateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_private_key ApiGatewayDomainName#certificate_private_key}.
     */
    readonly certificatePrivateKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#domain_name ApiGatewayDomainName#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.
     */
    readonly regionalCertificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.
     */
    readonly regionalCertificateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#security_policy ApiGatewayDomainName#security_policy}.
     */
    readonly securityPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags ApiGatewayDomainName#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags_all ApiGatewayDomainName#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * endpoint_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
     */
    readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration[];
    /**
     * mutual_tls_authentication block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
     */
    readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication[];
}
export interface ApiGatewayDomainNameEndpointConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#types ApiGatewayDomainName#types}.
     */
    readonly types: string[];
}
export interface ApiGatewayDomainNameMutualTlsAuthentication {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_uri ApiGatewayDomainName#truststore_uri}.
     */
    readonly truststoreUri: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_version ApiGatewayDomainName#truststore_version}.
     */
    readonly truststoreVersion?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}.
 */
export declare class ApiGatewayDomainName extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig);
    get arn(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    resetCertificateBody(): void;
    get certificateBodyInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    private _certificateName?;
    get certificateName(): string;
    set certificateName(value: string);
    resetCertificateName(): void;
    get certificateNameInput(): string | undefined;
    private _certificatePrivateKey?;
    get certificatePrivateKey(): string;
    set certificatePrivateKey(value: string);
    resetCertificatePrivateKey(): void;
    get certificatePrivateKeyInput(): string | undefined;
    get certificateUploadDate(): string;
    get cloudfrontDomainName(): string;
    get cloudfrontZoneId(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _regionalCertificateArn?;
    get regionalCertificateArn(): string;
    set regionalCertificateArn(value: string);
    resetRegionalCertificateArn(): void;
    get regionalCertificateArnInput(): string | undefined;
    private _regionalCertificateName?;
    get regionalCertificateName(): string;
    set regionalCertificateName(value: string);
    resetRegionalCertificateName(): void;
    get regionalCertificateNameInput(): string | undefined;
    get regionalDomainName(): string;
    get regionalZoneId(): string;
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    resetSecurityPolicy(): void;
    get securityPolicyInput(): string | undefined;
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
    private _endpointConfiguration?;
    get endpointConfiguration(): ApiGatewayDomainNameEndpointConfiguration[];
    set endpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration[]);
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApiGatewayDomainNameEndpointConfiguration[] | undefined;
    private _mutualTlsAuthentication?;
    get mutualTlsAuthentication(): ApiGatewayDomainNameMutualTlsAuthentication[];
    set mutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication[]);
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): ApiGatewayDomainNameMutualTlsAuthentication[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
